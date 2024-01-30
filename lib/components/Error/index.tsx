import styles from './index.module.css';
import StylizedText from '../Text/StylizedText';
import ErrorCloseIcon from './ErrorCloseIcon';

export interface Props {
  isFrontError: boolean
  module?: string
  component?: string
  file: string
  string?: number
  children: JSX.Element | string
  onClose: (event: any) => void
}

export const Error = ({ children }: Props) => {
  return (
    <div className={styles.error}>
      <div className={styles.error_text}>
        <StylizedText>{children}</StylizedText>
      </div>
      <div>
        <ErrorCloseIcon onClick={() => { alert("close") }} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};


Error.displayName = 'Error';

export default Error;
