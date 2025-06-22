import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui';

import { useBookingStore } from '../model/store';

export const CancelBookingDialog = () => {
  const { setOpenDialog, openCancelDialog, setOpenCancelDialog, resetFormValues } =
    useBookingStore();

  const onOpenChange = (open: boolean) => {
    setOpenCancelDialog(open);
  };

  const handleContinue = () => {
    resetFormValues();
    setOpenDialog(false);
  };

  return (
    <AlertDialog open={openCancelDialog} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы точно уверены?</AlertDialogTitle>
          <AlertDialogDescription>
            Закрытие этой формы приведет к потере введенных данных.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>Продолжить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
