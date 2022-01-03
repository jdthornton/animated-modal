import { CSSProperties } from 'react';
import Modal, { ModalContainerProps } from '@jdthornton/modal';
import useAnimate from '@jdthornton/useanimate';
import classNames from '@jdthornton/classnames';

export { useModal } from '@jdthornton/modal';

export type AnimatedModalProps = {
  isOpen: boolean;
  openClassName?: string;
  openStyle?: CSSProperties;
} & ModalContainerProps

export default function AnimatedModal({
  isOpen = false,
  children,
  overlayClassName,
  className,
  openClassName,
  overlayStyle = {},
  openStyle = {},
  ...props
}: AnimatedModalProps) {

  const { isShowing, isAnimated, elementProps } = useAnimate(isOpen,props.close);

  return isShowing ? (
    <Modal {...props} {...elementProps} overlayStyle={isAnimated ? {...openStyle,...overlayStyle} : overlayStyle} overlayClassName={classNames("AnimatedModal",overlayClassName,isAnimated && classNames("AnimatedModal--active",openClassName))} className={classNames("AnimatedModal__content",className)}>
      {children}
    </Modal>
  ) : null
}
