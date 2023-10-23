export default function useOutsideClick(ref, callBackFunctions, exeption) {
  function handleClick(e) {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.id !== exeption
    ) {
      callBackFunctions();
    }
  }

  document.addEventListener("mousedown", handleClick);
}
