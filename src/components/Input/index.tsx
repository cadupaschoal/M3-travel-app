import { forwardRef } from 'react';
import { InputHTMLAttributes, ForwardedRef } from 'react';
import { StyledInputContainer } from './styled';
import { FieldError } from 'react-hook-form';

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  error?: FieldError;
}

export const Input = forwardRef(
  (
    { label, type, name, ...rest }: iInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return label ? (
      <div>
        <StyledInputContainer>
          <label htmlFor={name}>{label}</label>
          <input type={type} id={name} ref={ref} {...rest} />
        </StyledInputContainer>
      </div>
    ) : (
      <div>
        <StyledInputContainer>
          <input type={type} id={name} ref={ref} {...rest} />
        </StyledInputContainer>
      </div>
    );
  }
);
