enum AppError {
  INPUT_PARAM_ERROR = "Please check your form inputs",
  INTERNAL_ERROR = "Some error in the server. Please contact support",
  ACCESS_DENIED = "Access denied to the request resource",
  NOT_FOUND = "Requested resource not found",
  FAILED_CSRF = "Invalid Request. Please login from site",
}

export default AppError;
