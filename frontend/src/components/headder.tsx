function Header() {
  return (
    <section>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Feature Request Dashboard
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Submit your feature requests and vote for the ones you want to see
          implemented.
        </p>
      </div>
    </section>
  );
}

export default Header;
