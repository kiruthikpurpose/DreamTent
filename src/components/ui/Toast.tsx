import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '../../lib/utils';

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  title: string;
  description: string;
}

export const Toast = ({ className, title, description, ...props }: ToastProps) => (
  <ToastPrimitive.Provider>
    <ToastPrimitive.Root
      className={cn(
        'fixed bottom-4 right-4 z-50 flex w-96 transform-gpu animate-in fade-in slide-in-from-bottom-5 rounded-lg border border-dream-purple bg-white/10 p-4 shadow-lg',
        className
      )}
      {...props}
    >
      <div className="grid gap-1">
        <ToastPrimitive.Title className="text-sm font-semibold text-dream-purple-light">
          {title}
        </ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-sm text-gray-300">
          {description}
        </ToastPrimitive.Description>
      </div>
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport />
  </ToastPrimitive.Provider>
);