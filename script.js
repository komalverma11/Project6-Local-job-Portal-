const jobs = [
      {
        company: "Punjab IT Solutions Pvt. Ltd.",
        district: "Ludhiana",
        address: "IT Park, Ludhiana, Punjab",
        workType: "IT Support and Network Management",
        qualification: "Diploma",
        contact: { email: "contact@punjabitsolutions.com", mobile: "+91 98765 43210" },
        description: "Handling technical support and maintaining network infrastructure for clients."
      },
      {
        company: "Amrit Engineering Works",
        district: "Amritsar",
        address: "Engineering Complex, Amritsar, Punjab",
        workType: "Mechanical Maintenance and Production",
        qualification: "Diploma",
        contact: { email: "hr@amritengineering.com", mobile: "+91 99876 54321" },
        description: "Overseeing mechanical maintenance and production processes for manufacturing plant."
      },
      {
        company: "Punjab Agro Industries Corporation Ltd.",
        district: "Patiala",
        address: "Agro Complex, Patiala, Punjab",
        workType: "Agricultural Technician",
        qualification: "Diploma",
        contact: { email: "careers@punjabagro.com", mobile: "+91 98765 54321" },
        description: "Managing agro-based technologies and providing technical support to farmers."
      },
      {
        company: "Chandigarh Electronics Pvt. Ltd.",
        district: "Patiala",
        address: "Electronics Park, Mohali, Punjab",
        workType: "Electronics and Hardware Engineering",
        qualification: "Degree",
        contact: { email: "support@chandigarhelectronics.com", mobile: "+91 99887 65432" },
        description: "Repairing and maintaining electronic devices and systems for the company."
      },
      {
        company: "Punjab Power Corporation Ltd.",
        district: "Bhatinda",
        address: "Power Complex Bhatinda, Punjab",
        workType: "Electrical Engineer",
        qualification: "Diploma",
        contact: { email: "hr@punjabpower.com", mobile: "+91 98765 43210" },
        description: "Handling electrical installations, power distribution, and maintaining electrical system."
      },
      {

        company: "Mohali Construction Pvt. Ltd.",
        district: "Mohali",
        address: "Construction Yard, Mohali, Punjab",
        workType: "Civil Engineer",
        qualification: "Diploma",
        contact: { email: "careers@mohaliconstruction.com", mobile: "+91 99876 54321" },
        description: "Overseeing construction projects, ensuring the safety and quality of buildings and infrastructure."
  },
     {
    company: "Hoshiarpur Logistics Ltd.",
    district: "Hoshiarpur",
    address: "Logistics Center, Hoshiarpur, Punjab",
    workType: "Warehouse Manager",
    qualification: "Degree",
    contact: {
      email: "jobs@hoshiarpurlogistics.com",
      mobile: "+91 99887 66789"
    },
    description: "Managing warehouse inventory, coordinating shipments, and ensuring smooth logistics operations."
},
  {
    company: "Ropar Pharmaceuticals Ltd.",
    district: "Rupnagar",
    address: "Pharma Industrial Estate, Rupnagar, Punjab",
    workType: "Pharmacist",
    qualification: "Degree",
    contact: {
      email: "jobs@roparpharma.com",
      mobile: "+91 98976 44532"
    },
    description: "Managing medicines, dispensing prescriptions, and advising patients.",
},
  {
    company: "Gurdaspur Education Society",
    district: "Gurdaspur",
    address: "Academic Lane, Gurdaspur, Punjab",
    workType: "School Principal",
    qualification: "Degree",
    contact: {
      email: "principaljobs@gurdaspurschools.com",
      mobile: "+91 97765 33445"
    },
    description: "Leading school operations, managing staff, and ensuring academic excellence."
},
  {
    company: "Hoshiarpur Fashion Studios",
    district: "Hoshiarpur",
    address: "Designer Studio, Hoshiarpur, Punjab",
    workType: "Textile Designer",
    qualification: "Diploma",
    contact: {
      email: "careers@hoshiarpurfashion.com",
      mobile: "+91 99888 11223"
    },
    description: "Designing fabrics, creating patterns, and collaborating with manufacturers."
},
  {
    company: "Ropar Event Management Group",
    district: "Rupnagar",
    address: "Event Planning Hub, Rupnagar, Punjab",
    workType: "Event Coordinator",
    qualification: "Diploma",
    contact: {
      email: "jobs@roparevents.com",
      mobile: "+91 98766 88990"
    },
    description: "Organizing and executing events, managing vendors, and handling client requirements."
},
  {
    company: "Gurdaspur Digital Studios",
    district: "Gurdaspur",
    address: "Media Lane, Gurdaspur, Punjab",
    workType: "Graphic Designer",
    qualification: "Diploma",
    contact: {
      email: "hr@gurdaspurdigital.com",
      mobile: "+91 98777 55432"
    },
    description: "Creating visual content, designing logos, and collaborating on marketing campaigns."
}, 
{
company: "Guru Nanak Charitable Hospital",
district: "Ludhiana",
address: "Dehlon, Ludhiana, Punjab",
workType: "Receptionist/Administrative Assistant",
qualification: "12th pass",
contact:{
email: "hr@gnchospital.com",
mobile: "+91 98765 43210"
},
description: "Managing front desk, welcoming visitors, handling calls, and other administrative tasks."
},
{
company: "NFCI Hotel Management & Culinary Institute",
district: "Patiala",
address: "Patiala, Punjab",
workType: "Front Office Executive (Receptionist)",
qualification: "12th pass",
contact:{
email: "info@nfcihospitality.com",
mobile: "+91 87654 32109"
},
description: "Managing the front desk, welcoming guests, handling calls, and maintaining records."
},
{
company: "Shri Shyam Agency",
district: "Amritsar",
address: "Amritsar, Punjab",
workType: "Hotel Receptionist",
qualification: "12th pass", 
contact:{
email: "contact@shreeshyamagency.com",
mobile: "+91 99887 65432"
},
description: "Managing front desk, assisting guests with check-in/check-out, and maintaining hotel records."
},
{
company: "NFCI",
district: "Hoshiarpur",
address: "Hoshiarpur, Punjab",
workType: "Receptionist & Telecaller",
qualification: "12th pass", 
contact:{
email: "careers@nfcihospitality.com",
mobile: "+91 98765 43211",
},
description: "Handling telephone calls, welcoming visitors, and other administrative work."
},
{
company: "Job Matchmakers",
district: "Mohali",
address: "Mohali, Punjab",
workType: "Front Desk Receptionist",
qualification: "12th pass", 
contact:{
email: "info@jobmatchmakers.com",
mobile: "+91 87654 32110",
},
description: "Managing the front desk, welcoming visitors, handling calls, and other administrative tasks."
},
{
company: "Bathinda Hospitality Pvt. Ltd.",
district: "Bhatinda",
address: "Hotel Royal, Bathinda, Punjab",
workType: "Hotel Receptionist",
qualification: "12th pass", 
contact:{
email: "hr@bathindahotel.com",
mobile: "+91 96543 76543",
},
description: "Managing front desk, assisting guests with check-in/check-out, and maintaining hotel records."
},
    {
company: "The White Solitaire",
district: "Ludhiana",
address: "Ludhiana, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "info@whitesolitaire.com",
mobile: "+91 98765 43210"
},
description: "Greet all guests and assist them with check-in and check-out; respond to all guest questions and requests; answer and forward phone calls."
},
{
company: "Hotel Grand",
district: "Patiala",
address: "Patiala, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "hr@hotelgrandpatiala.com",
mobile: "+91 87654 32109"
},
description: "Managing front desk operations, assisting guests during check-in and check-out, and maintaining guest records."
},
{
company: "Hotel City Inn",
district: "Amritsar",
address: "Amritsar, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "contact@hotelcityinn.com",
mobile: "+91 99887 65432"
},
description: "Handling guest check-ins and check-outs, answering phone calls, and providing information about hotel services."
},
{
company: "Hotel Comfort Stay",
district: "Hoshiarpur",
address: "Hoshiarpur, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "info@hotelcomfortstay.com",
mobile: "+91 98765 43211"
},
description: "Welcoming guests, managing reservations, and addressing guest inquiries."
},
{
company: "Hotel Sunrise",
district: "Gurdaspur",
address: "Gurdaspur, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "hr@hotelsunrisegurdaspur.com",
mobile: "+91 91234 56789"
},
description: "Managing front desk activities, assisting guests with check-in/check-out processes, and handling guest queries."
},
{
company: "Hotel Elite",
district: "Mohali",
address: "Mohali, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "contact@hotelelitemohali.com",
mobile: "+91 87654 32110"
},
description: "Overseeing front desk operations, welcoming guests, and managing bookings."
},
{
company: "Hotel Royal Palace",
district: "Bhatinda",
address: "Bathinda, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "hr@hotelroyalpalace.com",
mobile: "+91 96543 76543"
},
description: "Handling guest check-ins and check-outs, managing reservations, and providing customer service."
},
{
company: "Hotel River View",
district: "Rupnagar",
address: "Rupnagar, Punjab",
workType: "Hotel Receptionist",
qualification: "10th pass",
contact:{
email: "info@hotelriverview.com",
mobile: "+91 91234 56780"
},
description:"Overseeing front desk operations, welcoming guests, and managing bookings."
},  
      
      {
        company: "Punjab State Transportation Corporation",
        district: "Jalandhar",
        address: "Transport Hub, Jalandhar, Punjab",
        workType: "Driver and Transport Supervisor",
        qualification: "10th/12th pass, Driver’s License",
        contact: { email: "transport@punjabstc.com", mobile: "+91 98765 67890" },
        description: "Managing transport operations, ensuring timely vehicle maintenance and scheduling."
  },
      {
        company: "Ludhiana Textile Mills",
        district: "Ludhiana",
        address: "Textile Complex, Ludhiana, Punjab",
        workType: "Textile Engineer",
        qualification: "Degree",
        contact: { email: "hr@ludhianatextiles.com", mobile: "+91 99888 12345" },
        description: "Overseeing textile manufacturing processes and ensuring product quality control."
  },
      {
        company: "Mohali Healthcare Solutions",
        district: "Mohali",
        address: "Health Park, Mohali, Punjab",
        workType: "Medical Assistant",
        qualification: "Degree",
        contact: { email: "info@mohalihealthcare.com", mobile: "+91 98765 12345" },
        description: "Assisting doctors and medical staff with patient care and administrative tasks."
  },
      {
        company: "Punjab Software Innovations Pvt. Ltd.",
        district: "Amritsar",
        address: "Software Park, Amritsar, Punjab",
        workType: "Software Developer",
        qualification: "Degree",
        contact: { email: "jobs@punjabsoftware.com", mobile: "+91 99987 65432" },
        description: "Developing and testing software applications for various business needs."
  }
    ];

    document.getElementById("search-btn").addEventListener("click", function() {
      const selectedDistrict = document.getElementById("district").value;
      const selectedQualification = document.getElementById("qualification").value;

      if (!selectedDistrict || !selectedQualification) {
        alert("Please select both district and qualification.");
        return;
      }

      const filteredJobs = jobs.filter(job =>
        job.district === selectedDistrict && job.qualification === selectedQualification
      );

      localStorage.setItem("jobResults", JSON.stringify(filteredJobs));
      window.location.href = "output.html";
    });
