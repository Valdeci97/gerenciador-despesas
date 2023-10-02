export default function FormButton({ btnText }: { btnText: string }) {
  return (
    <button
      type="button"
      className="w-75% bg-green-contrast text-white text-24px h-[5rem] justify-self-center rounded-lg smdvc-400px:text-18px mddvc-540px:text-20px dvc-brkpt-768px:text-22px"
    >
      {btnText}
    </button>
  );
}
