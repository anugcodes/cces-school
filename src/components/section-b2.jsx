import React, { useState } from "react";
import { PropTypes } from "prop-types";

import {
  FormControl,
  FormLabel,
  Stack,
  Select,
  MenuItem,
  Input,
} from "@mui/material";

export default function SectionB2() {
  const [b21, set_b21] = useState("");
  const [b22, set_b22] = useState("");
  const [b23, set_b23] = useState("");
  const [b24, set_b24] = useState("");
  const [b25, set_b25] = useState("");
  const [b26, set_b26] = useState("");
  const [b27, set_b27] = useState("");
  const [b28, set_b28] = useState("");
  const [b29, set_b29] = useState("");
  const [b210, set_b210] = useState("");
  const [b211, set_b211] = useState("");
  const [b212, set_b212] = useState("");
  const [b213, set_b213] = useState("");
  const [b214, set_b214] = useState("");
  const [b215, set_b215] = useState("");
  const [b216, set_b216] = useState("");
  const [b217, set_b217] = useState("");
  const [b218, set_b218] = useState("");
  const [b219, set_b219] = useState("");
  const [b220, set_b220] = useState("");
  const [b221, set_b221] = useState("");
  const [b222, set_b222] = useState("");
  const [b223, set_b223] = useState("");

  return (
    <div>
      <Stack direciton="column" spacing={2} sx={{ padding: "1rem" }}>
        <OptionForm
          question={b21}
          set_question={set_b21}
          label="What is the main source of water supply in your school?"
          options={[
            "No drinking water",
            "Surface water: lake, river, stream, pond, canals, irrigation ditches",
            "Unprotected well/spring",
            "Hand pump/tube well",
            "Borehole",
            "Protected dug well",
            "Protected spring",
            "Packaged or delivered water",
            "Rainwater",
            "Tanker-truck or cart",
            "Piped water supply",
          ]}
        />
        <OptionForm
          question={b22}
          set_question={set_b22}
          label="Is adequate safe drinking water (at least 1.5 litre per child per day in non-residential & 5 litre per child per day in residential school) available from this water supply, all days throughout the year?"
          options={[
            "No, not available (unavailable > 30 days total)",
            "Mostly Available (unavailable ≤ 30 days total)",
            "Yes (always)",
          ]}
        />
        <OptionForm
          question={b23}
          set_question={set_b23}
          label="How is drinking water stored and handled in the school?"
          options={[
            "No storage system for storing drinking water",
            "Container /pitcher only",
            "Container/pitcher with lid and ladle",
            "Container with taps",
            "Overhead storage tank with drinking water taps",
          ]}
        />
        <BooleanField
          label="Does the water stored in the school adequate to meet the requirement of water for all purposes?"
          question={b24}
          set_question={set_b24}
        />
        <OptionForm
          question={b25}
          set_question={set_b25}
          label="Is the quality of drinking water tested"
          options={[
            "No testing",
            "Tested once a year",
            "Tested twice or more times in a year",
          ]}
        />
        <BooleanField
          question={b26}
          set_question={set_b26}
          label="Whether testing reports available with the school?"
        />
        <OptionForm
          question={b27}
          set_question={set_b27}
          label="Whether the school has taken any measures for reducing contamination to ensure water quality?"
          options={["water treatment", "safe storage", "safe handling"]}
        />
        <InputField
          set_question={set_b28}
          label="How many functional drinking water points are there in the school?"
        />
        <BooleanField
          question={b29}
          set_question={set_b29}
          label="Do all the drinking water points have proper platforms/ floor and safe drainage arrangements?"
        />
        <BooleanField
          question={b210}
          set_question={set_b210}
          label="Are all water sources of the school secured during the flood situation/cyclone ?"
        />
        <OptionForm
          question={b211}
          set_question={set_b211}
          label="What is the main source of water for use in toilets?"
          options={[
            "No water supplies available",
            "Hand pump/ bucket/ tap near toilet unit ",
            "Drums/ cement tanks/ plastic containers with water inside the toilet unit",
            "Running water with taps inside each toilet unit",
          ]}
        />
        <OptionForm
          question={b212}
          set_question={set_b212}
          label="What is the main source of water used for hand washing before Mid-Day Meal (MDM) / lunch by students and cooks? "
          options={[
            "No water supplies available",
            "Hand pump/ bucket/ tap near toilet unit ",
            "Drums/ cement tanks/ plastic containers with water near hand washing area",
            "Running water with taps at all the hand washing points",
          ]}
        />
        <OptionForm
          question={b213}
          set_question={set_b213}
          label=" Is there a functional Rainwater Water Harvesting facility in the school ?"
          options={[
            "No",
            "Yes with the Groundwater recharge system",
            "Yes with Rain water storage system",
            "Yes, both rainwater storage and groundwater recharge system",
          ]}
        />
        <InputField
          set_question={set_b214}
          label="If school has a storage structure/ tank for the RWH? What is the capacity in litres?"
          place="In Liters"
        />
        <BooleanField
          question={b215}
          set_question={set_b215}
          label="Whether the school use rainwater for drinking water and other purposes (wherever applicable)?"
        />
        <OptionForm
          question={b216}
          set_question={set_b216}
          label="How frequently school does thorough sanitary inspections of the water source (including water points) in the school?"
          options={[
            "Not done",
            "annually",
            "half yearly",
            "quarterly",
            " bi-monthly",
            "monthly",
            "weekly"
          ]}
        />
        <OptionForm
          question={b217}
          set_question={set_b217}
          label="Does the school have adopted any of the following water use reduction strategies?"
          options={[
            "Water-efficient fixtures for taps",
            "Tap-aerators",
            "Automatic shut-off faucets",
            "low water using a rural pan",
            "Low water-consuming toilet flush system (Low-flow toilets and urinals)",
            "Water-efficient kitchen and laundry equipment",
            "Native and drought-resistant plants",
            "Drip/ sprinklers techniques",
            "Any other please mention"
          ]}
        />
        <OptionForm
          question={b218}
          set_question={set_b218}
          label="Does the school have a robust mechanism of frequent monitoring and instant repair leakage and wastage of water?"
          options={[
            "No",
            "Yes monitoring system",
            "both monitoring and instant repair mechanism",
          ]}
        />
        <BooleanField
          question={b219}
          set_question={set_b219}
          label="Is the school (including campus, building, classrooms, etc.) located above the flood levels?"
        />
        <BooleanField
          question={b220}
          set_question={set_b220}
          label="Are the school premises free of water logging?"
        />
        <OptionForm
          question={b221}
          set_question={set_b221}
          label="Which among the following greywater (e.g. wastewater near a water source, from the kitchen, utensil washing, etc. ) management system/infrastructure (including treatment) is/ are adopted in the school? (multiple options may be selected)"
          options={[
            "No specific system",
            "The system there but non-functional",
            "Water reuse in the kitchen garden",
            "Soak pit/ Leach pit/ Magic pit",
            "Closed drainage channel",
            "Storage and safe conveyance to a treatment plant"
          ]}
        />
        <BooleanField
          question={b222}
          set_question={set_b222}
          label="Has the school done a water budgeting exercise with the students of the appropriate age, last year?"
        />
        <BooleanField
          question={b223}
          set_question={set_b223}
          label="Has the school conducted local awareness drives on water conservation and management drive in the community/ locality?"
        />
      </Stack>
    </div>
  );
}

export const OptionForm = ({ question, set_question, label, options }) => {
  return (
    <FormControl sx={{ m: 1 }} required>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <Select
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.trim().toLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
OptionForm.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
};

const BooleanField = ({ question, set_question, label }) => {
  return (
    <FormControl sx={{ m: 1 }} required>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <Select
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
      >
        <MenuItem value={"yes"}>Yes</MenuItem>
        <MenuItem value={"no"}>No</MenuItem>
      </Select>
    </FormControl>
  );
};
BooleanField.propTypes = {
  question: PropTypes.string,
  set_question: PropTypes.func,
  label: PropTypes.string,
};

const InputField = ({ set_question, label, place }) => {
  return (
    <FormControl sx={{ m: 1 }} required>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <Input
        placeholder={place}
        onChange={(e) => set_question(e.target.value)}
      />
    </FormControl>
  );
};

InputField.propTypes = {
  set_question: PropTypes.func,
  label: PropTypes.string,
  place: PropTypes.string,
};