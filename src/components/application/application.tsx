export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h5>Section 1</h5>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="UK">United Kingdom</option>
            <option value="JP">Japan</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
