import { MdRateReview } from 'react-icons/md'
import { ModalProp } from '../../Types/Modal.types';

function FeedBackButton({ show, setShow }: ModalProp) {
  return (
    !show ? (<span role={"button"} onClick={() => { setShow(!show) }} className="">
      <MdRateReview className="feedbacky-open-icon-button" />
    </span>) : null
  )
}
export default FeedBackButton;