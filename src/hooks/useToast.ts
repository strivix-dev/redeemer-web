// import { TranslationType } from '@/types/enums';
// import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

interface ShowToastProps {
  title?: string;
  description: string;
}

interface UseToastProps {
  //   translationType: TranslationType;
}

interface UseToastResponse {
  showSuccessToast: (props: ShowToastProps) => void;
  showErrorToast: (props: ShowToastProps) => void;
  showMessage: (props: ShowToastProps) => void;
}

const useToast = (): UseToastResponse => {
  //   const t = useTranslations(translationType);

  return {
    showSuccessToast: ({ description, title }: ShowToastProps) =>
      toast.success(title ?? 'success', {
        description: description,
        // unstyled: true,
        // classNames: {
        //   error: 'bg-red-400',
        //   success: 'text-green-400',
        //   warning: 'text-yellow-400',
        //   info: 'bg-blue-400',
        // },
      }),
    showErrorToast: ({ description, title }: ShowToastProps) =>
      toast.error(title ?? 'error', {
        description: description,
        unstyled: true,
        className: 'bg-red-400 text-green-400 text-yellow-400 bg-blue-400',
      }),
    showMessage: ({ description, title }: ShowToastProps) =>
      toast.info(title ? title : undefined, {
        description: description,
      }),
  };
};

export default useToast;
