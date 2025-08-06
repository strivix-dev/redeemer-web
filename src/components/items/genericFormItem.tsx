import { cn } from '@/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
// import { useTranslations } from 'use-intl';
// import TranslatedText from '../i18n/translatedText';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

type FormItemProps<
  FormType extends FieldValues,
  Name extends FieldPath<FormType>,
> = {
  label?: string;
  name: Name;
  beforRender?: ReactNode;
  formLabelClassName?: string;
  form: UseFormReturn<FormType>;
  formContainerClassName?: string;
};

type GenericFormItemValues<
  TFieldValues extends FieldValues,
  Name extends FieldPath<TFieldValues>,
> =
  | {
      type: string;
      placeholder?: string;
      placeHolderWithTranslation?: string;
      render?: undefined;
    }
  | {
      type?: undefined;
      placeholder?: undefined;
      placeHolderWithTranslation?: undefined;
      render: (field: ControllerRenderProps<TFieldValues, Name>) => ReactNode;
    };

type GenericFormItemProps<
  FormType extends FieldValues,
  Name extends FieldPath<FormType>,
> = FormItemProps<FormType, Name> & GenericFormItemValues<FormType, Name>;

const GenericFormItem = <
  FormType extends FieldValues,
  Name extends FieldPath<FormType>,
>({
  form,
  name,
  type,
  label,
  render,
  children,
  beforRender,
  placeholder,
  formLabelClassName,
  formContainerClassName,
  placeHolderWithTranslation,
}: PropsWithChildren<GenericFormItemProps<FormType, Name>>) => {
  //   const t = useTranslations('labels');
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className={cn('', formContainerClassName)}>
            {label && (
              <FormLabel className={cn('', formLabelClassName)}>
                label
                {/* <TranslatedText namespace="labels">{label}</TranslatedText> */}
              </FormLabel>
            )}
            <FormControl>
              <div>
                {beforRender}
                {type && (placeholder || placeHolderWithTranslation) ? (
                  <Input placeholder={placeholder} type={type} {...field} />
                ) : (
                  render?.(field)
                )}
              </div>
            </FormControl>
            {children}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GenericFormItem;
