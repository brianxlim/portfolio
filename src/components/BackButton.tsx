import { ArrowLeft } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router'

function BackButton() {
  const navigate = useNavigate()

  return (
    <div>
        <button
            type="button"
            onClick={() => navigate(-1)}
            className="group mb-8 inline-flex items-center font-semibold leading-tight text-teal-300 transition-colors hover:text-teal-200 focus-visible:text-teal-200 focus:outline-none"
        >
            <ArrowLeft
                className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
            />
            Back
        </button>
    </div>
  )
}

export default BackButton