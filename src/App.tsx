import { Button } from "./components";
import { TextField } from "./components";
import { Select } from "./components";
import { Checkbox } from "./components";
import { RadioGroup } from "./components";
import { Switch } from "./components";
import { Textarea } from "./components";
import { useState } from "react";

import "./styles/index.scss";

function App() {
  const [shipping, setShipping] = useState("standard");
  const [darkMode, setDarkMode] = useState(false);
  const [bio, setBio] = useState("");

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
          hint="We'll send a confirmation."
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
      <div className="p-6 space-y-4 max-w-md">
        <Checkbox
          label="Subscribe to newsletter"
          hint="You can unsubscribe anytime."
        />
        <Checkbox
          label="I agree to the terms"
          required
          error="You must agree to continue."
        />
      </div>
      <div className="p-6 max-w-md space-y-4">
        <RadioGroup
          label="Delivery Method"
          value={shipping}
          onChange={setShipping}
          options={[
            { value: "standard", label: "Standard (Free)" },
            { value: "express", label: "Express ($9.99)" },
            { value: "overnight", label: "Overnight ($19.99)" },
          ]}
          hint="Choose how you'd like your package delivered."
        />
      </div>
      <div className="p-6 space-y-4 max-w-md">
        <Switch
          label="Dark Mode"
          hint="Toggle theme preference"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        <p>Dark mode is {darkMode ? "enabled" : "disabled"}.</p>
      </div>
      <div className="p-6 max-w-md space-y-4">
        <Textarea
          label="Short Bio"
          hint="Tell us a little about yourself (max 250 characters)"
          maxLength={250}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <p className="text-sm text-gray-500">{bio.length}/250</p>
      </div>
    </>
  );
}

export default App;
