import Swal from "sweetalert2";

export const showSuccessAlert = (
  title?: string,
  text?: string,
  confirmAction?: () => void
) => {
  Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "OK",
  }).then((response) => {
    if (response.isConfirmed && confirmAction) {
      confirmAction();
    }
  });
};

export const showErrorAlert = (title?: string, text?: string) => {
  Swal.fire({
    title,
    text,
    icon: "error",
    confirmButtonText: "OK",
  });
};
