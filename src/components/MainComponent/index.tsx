import { ButtonComponent } from "./Button";
import { LocationComponent } from "./LocationData";
import { FormComponent } from "./PessoalData/PersonForm";

export const MainComponent = () => {
  return (
    <div>
      <FormComponent />
      <LocationComponent />
      <ButtonComponent />
    </div>
  );
};
