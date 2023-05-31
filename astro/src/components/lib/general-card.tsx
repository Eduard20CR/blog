export default function GeneralCard(props: any) {
  console.log(props);
  return (
    <article
      class={`${props.i ? "mt-7" : "mt-7"} border-black border-2 p-4 rounded shadow bg-white hover:scale-105 transition-transform duration-300`}
    >
      <header>
        <h3 class="uppercase font-bold">{props.title}</h3>
        <div class="mt-2 flex gap-2">
          <span class="text-sm uppercase bg-green-300 px-2 py-1 inline-block font-bold text-white rounded">tech</span>
          <span class="text-sm uppercase bg-red-300 px-2 py-1 inline-block font-bold text-white rounded">tech</span>
          <span class="text-sm uppercase bg-blue-300 px-2 py-1 inline-block font-bold text-white rounded">tech</span>
        </div>
      </header>
      <footer class="flex justify-end mt-6">
        <button class=" text-sm  uppercase border-black border-b-2 font-bold">See more</button>
      </footer>
    </article>
  );
}
