import { ChildrenProps } from '@/@types/children-props';

export default function HomeIcon({
  children,
  message,
}: ChildrenProps & { message: string }) {
  return (
    <div className="flex justify-between items-center max-w-80%">
      {children}
      <span className="text-14px text-light dark:text-white max-w-80%">{message}</span>
    </div>
  );
}
