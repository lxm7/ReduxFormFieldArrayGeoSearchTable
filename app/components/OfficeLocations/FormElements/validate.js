const validate = values => {
  const errors = {};
  if (!values.get('offices') || !values.get('offices').size) {
    errors.offices = { _error: 'At least one office must be entered' };
  } else {
    const officesArrayErrors = [];
    values.get('offices').forEach((office, officeIndex) => {
      const officeRowErrors = {};
      if (!office || !office.get('id')) {
        officeRowErrors.id = 'Required';
        officesArrayErrors[officeIndex] = officeRowErrors;
      }
      if (!office || !office.get('officeName')) {
        officeRowErrors.officeName = 'Required';
        officesArrayErrors[officeIndex] = officeRowErrors;
      }
      if (!office || !office.get('officeType')) {
        officeRowErrors.officeType = 'Required';
        officesArrayErrors[officeIndex] = officeRowErrors;
      }
      if (!office || office.get('contactEmail') && !/^\s*(?:\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}\b\s*)+$/i.test(office.get('contactEmail'))) {
        officeRowErrors.contactEmail = 'Invalid email';
        officesArrayErrors[officeIndex] = officeRowErrors;
      }
    });
    if (officesArrayErrors.length) {
      errors.offices = officesArrayErrors;
    }
  }
  return errors;
};

export default validate;
