import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/libs/Logger';
import { Env } from '@/libs/Env';

/**
 * API proxy route handler
 * This route forwards requests to the external API and returns the response
 * It helps avoid CORS issues and keeps API keys secure
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxyRequest(request, params.path, 'GET');
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxyRequest(request, params.path, 'POST');
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxyRequest(request, params.path, 'PUT');
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxyRequest(request, params.path, 'DELETE');
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxyRequest(request, params.path, 'PATCH');
}

/**
 * Handle proxy request to external API
 */
async function handleProxyRequest(
  request: NextRequest,
  pathSegments: string[],
  method: string
): Promise<NextResponse> {
  try {
    // Get API base URL from environment variables
    const apiBaseUrl = Env.API_BASE_URL || 'https://api.example.com';
    
    // Construct the full URL to the external API
    const path = pathSegments.join('/');
    const url = new URL(`${apiBaseUrl}/${path}`);
    
    // Copy query parameters
    const searchParams = new URL(request.url).searchParams;
    searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });
    
    // Prepare headers
    const headers = new Headers();
    
    // Copy relevant headers from the original request
    request.headers.forEach((value, key) => {
      // Skip headers that shouldn't be forwarded
      if (
        !['host', 'connection', 'content-length'].includes(key.toLowerCase())
      ) {
        headers.append(key, value);
      }
    });
    
    // Add API key if available
    if (Env.API_KEY) {
      headers.append('Authorization', `Bearer ${Env.API_KEY}`);
    }
    
    // Prepare request options
    const requestInit: RequestInit = {
      method,
      headers,
      // Include body for methods that support it
      ...(method !== 'GET' && method !== 'HEAD'
        ? { body: await request.text() }
        : {}),
    };
    
    // Log the outgoing request
    logger.info(`Proxying ${method} request to ${url.toString()}`);
    
    // Make the request to the external API
    const response = await fetch(url.toString(), requestInit);
    
    // Create a new response with the API response
    const responseData = await response.text();
    
    // Create headers for the response
    const responseHeaders = new Headers();
    
    // Copy relevant headers from the API response
    response.headers.forEach((value, key) => {
      // Skip headers that shouldn't be forwarded
      if (!['content-encoding', 'content-length'].includes(key.toLowerCase())) {
        responseHeaders.append(key, value);
      }
    });
    
    // Return the response
    return new NextResponse(responseData, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    // Log the error
    logger.error('API proxy error', { error });
    
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to proxy request to API' },
      { status: 500 }
    );
  }
}
