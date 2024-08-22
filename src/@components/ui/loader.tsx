import { CgSpinner } from 'react-icons/cg'
export function Loader() {
  return (
    <button type="button" className="bg-red-500 ..." disabled>
      <CgSpinner className="animate-spin h-5 w-5 mr-3 ..." />
    </button>
  )
}
