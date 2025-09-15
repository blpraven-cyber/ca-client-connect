// We'll add interactivity later

const data = {
  Client_ID: 'C' + Date.now().toString().slice(-6),
  Name: formData.get('name'),
  PAN: formData.get('pan'),
  GSTIN: formData.get('gstin'),
  E_mail: formData.get('email'),
  Phone: formData.get('phone'),
  Business_Type: formData.get('business'),
  Status: 'Pending',
  Password: formData.get('password') // ← Added
};