import { CgSpinner } from 'react-icons/cg'
export function Loader() {
  return (
    <button
      type="button"
      className=" w-full  flex flex-col items-center justify-center..."
      disabled>
      <CgSpinner className="animate-spin h-5 w-5 mr-3 ..." />
    </button>
  )
}
