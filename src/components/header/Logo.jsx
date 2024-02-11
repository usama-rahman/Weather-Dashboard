import WeatherAppLogo from "../../assets/logo.svg";

function Logo() {
  return (
    <>
      <a>
        <img className="h-9" src={WeatherAppLogo} alt="Weather App" />
      </a>
    </>
  );
}
export default Logo;
