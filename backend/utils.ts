interface AggieCardData {
    name: string;
    email: string;
    phone: string;
    photo: string;
    location: string;
    year: string;
    major: string;
    gradDate: string;
  }
  
function generateAggieCard(formData: AggieCardData) {
const { name, email, phone, photo, location, year, major, gradDate } = formData;

const image = 'https://via.placeholder.com/300x200';
const studentId = '000000000';

const aggieCardData: AggieCardData = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    photo: formData.photo,
    location: formData.location,
    year: formData.year,
    major: formData.major,
    gradDate: formData.gradDate,
    };

return aggieCardData;
}

