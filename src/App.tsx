import { Button } from "./components";
import { TextField } from "./components";
import { Select } from "./components";

import "./styles/index.scss";

function App() {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <Button variant="primary" size="md">
          Click Me
        </Button>
      </div>

      <div className="p-6 max-w-md space-y-4">
        <TextField label="Name" placeholder="Jane Doe" />
        <TextField
          label="Email"
          type="email"
          required
          hint="We’ll send a confirmation."
        />
        <TextField
          label="Username"
          placeholder="@handle"
          error="Username already taken"
        />
      </div>
      <div className="p-6 space-y-4 max-w-md">
        <Select
          label="Country"
          options={[
            { value: "", label: "Select a country" },
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
          ]}
          required
          hint="Choose your country for shipping."
        />
      </div>
    </>
  );
}

export default App;
