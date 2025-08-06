declare type Nullable<T> = T | null;

interface ArrayFunction<P = object, ReturnType = void> {
  (props: P): ReturnType;
}

interface ArrayFunctionNoProps<ReturnType> {
  (): ReturnType;
}

declare type AF<P = object, ReturnType = void> = ArrayFunction<P, ReturnType>;

declare type AFNP<ReturnType = void> = ArrayFunctionNoProps<ReturnType>;

declare type GoogleMapInstance = google.maps.Map;

declare type Base64 = string | ArrayBuffer | null;

declare type PropsWithClassName<P = unknown> = P & { className?: string };

declare type Dictionary<T = unknown> = Record<string, T>;

declare type NonNullableValue<T, K extends keyof T = keyof T> = {
  [key in K]: Exclude<T[key], null>;
};
