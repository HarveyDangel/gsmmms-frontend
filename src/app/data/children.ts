export type Child = {
	id: number;
	nameOfChild: string;
	nameOfCaregiver: string;
	belongToIP: string;
   sex: string;
   dateOfBirth: string;
   dateMeasured: string;
   ageInMonths: number;
   weight: string;
   height: string;
   nutritionalStatusWFA: string;
   nutritionalStatusHFA: string;
   nutritionalStatusWFH: string;
};

export const children: Child[] = [
   {
      id: 1,
      nameOfChild: "John Doe",
      nameOfCaregiver: "Jane Doe",
      belongToIP: "No",
      sex: "Male",
      dateOfBirth: "2020-01-01",
      dateMeasured: "2023-01-01",
      ageInMonths: 36,
      weight: "15.5 kg",
      height: "90 cm",
      nutritionalStatusWFA: "Severely Underweight",
      nutritionalStatusHFA: "Normal",
      nutritionalStatusWFH: "Normal"
   },
   {
      id: 2,
      nameOfChild: "Alice Smith",
      nameOfCaregiver: "Bob Smith",
      belongToIP: "Yes",
      sex: "Female",
      dateOfBirth: "2020-05-15",
      dateMeasured: "2023-05-15",
      ageInMonths: 32,
      weight: "14.2 kg",
      height: "88 cm",
      nutritionalStatusWFA: "Normal",
      nutritionalStatusHFA: "Normal",
      nutritionalStatusWFH: "Normal"
   },
   {
      id: 3,
      nameOfChild: "Charlie Johnson",
      nameOfCaregiver: "Diana Johnson",
      belongToIP: "No",
      sex: "Male",
      dateOfBirth: "2020-10-10",
      dateMeasured: "2023-10-10",
      ageInMonths: 28,
      weight: "13.8 kg",
      height: "85 cm",
      nutritionalStatusWFA: "Normal",
      nutritionalStatusHFA: "Normal",
      nutritionalStatusWFH: "Normal"
   },
   {
      id: 4,
      nameOfChild: "Emily Davis",
      nameOfCaregiver: "Frank Davis",
      belongToIP: "Yes",
      sex: "Female",
      dateOfBirth: "2021-03-20",
      dateMeasured: "2024-03-20",
      ageInMonths: 24,
      weight: "12.5 kg",
      height: "80 cm",
      nutritionalStatusWFA: "Underweight",
      nutritionalStatusHFA: "Normal",
      nutritionalStatusWFH: "Normal"
   },
   {
      id: 5,
      nameOfChild: "Michael Brown",
      nameOfCaregiver: "Sarah Brown",
      belongToIP: "No",
      sex: "Male",
      dateOfBirth: "2020-08-15",
      dateMeasured: "2023-08-15",
      ageInMonths: 30,
      weight: "14.0 kg",
      height: "87 cm",
      nutritionalStatusWFA: "Normal",
      nutritionalStatusHFA: "Normal",
      nutritionalStatusWFH: "Normal"
   },
   {
      id: 6,
      nameOfChild: "Sophia Wilson",
      nameOfCaregiver: "David Wilson",
      belongToIP: "Yes",
      sex: "Female",
      dateOfBirth: "2020-12-10",
      dateMeasured: "2023-12-10",
      ageInMonths: 36,
      weight: "15.2 kg",
      height: "92 cm",
      nutritionalStatusWFA: "Normal",
      nutritionalStatusHFA: "Normal",
      nutritionalStatusWFH: "Normal"
   },
];
