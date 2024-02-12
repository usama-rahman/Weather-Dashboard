import WeatherBoard from "./components/Weather/WeatherBoard";
import Header from "./components/header/Header";

function Page() {
  return (
    <>
      <body className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
        <Header />
        <main>
          <WeatherBoard />
        </main>
      </body>
    </>
  );
}
export default Page;
