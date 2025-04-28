'use client';

import { clientLogger } from '@/libs/ClientLogger';
import { counterService } from '@/services/api';
import { CounterValidation } from '@/validations/CounterValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const CounterForm = () => {
  const form = useForm({
    resolver: zodResolver(CounterValidation),
    defaultValues: {
      increment: 0,
    },
  });
  const router = useRouter();

  const handleIncrement = form.handleSubmit(async (data) => {
    try {
      await counterService.increment(data.increment);
      form.reset();
      router.refresh();
    } catch (error) {
      clientLogger.error('Failed to increment counter:', error);
    }
  });

  return (
    <form onSubmit={handleIncrement}>
      <p>This is a simple counter example that uses API routes.</p>
      <div>
        <label className="text-sm font-bold text-gray-700" htmlFor="increment">
          Increment:
          <input
            id="increment"
            type="number"
            className="ml-2 w-32 appearance-none rounded-sm border border-gray-200 px-2 py-1 text-sm leading-tight text-gray-700 focus:outline-hidden focus:ring-3 focus:ring-blue-300/50"
            {...form.register('increment')}
          />
        </label>

        {form.formState.errors.increment?.message && (
          <div className="my-2 text-xs italic text-red-500">{form.formState.errors.increment?.message}</div>
        )}
      </div>

      <div className="mt-2">
        <button
          className="rounded-sm bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-hidden focus:ring-3 focus:ring-blue-300/50 disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Increment
        </button>
      </div>
    </form>
  );
};
