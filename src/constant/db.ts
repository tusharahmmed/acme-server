import { ILegalDoc } from '../common';

export const mockLegalDocs: ILegalDoc[] = [
  {
    id: '1',
    title: 'Employment Contract Agreement',
    category: 'Employment Law',
    content: `This Employment Contract Agreement ("Agreement") is entered into between XYZ Corporation ("Employer") and John Doe ("Employee").

1. POSITION AND DUTIES
Employee is hired as Senior Software Engineer. Employee agrees to perform duties including software development, code review, and technical documentation.

2. COMPENSATION
Employee shall receive an annual salary of $120,000, payable bi-weekly. Employee is eligible for performance bonuses and stock options.

3. TERM OF EMPLOYMENT
This agreement shall commence on January 1, 2024, and continue until terminated by either party with 30 days written notice.

4. CONFIDENTIALITY
Employee agrees to maintain confidentiality of all proprietary information, trade secrets, and business strategies during and after employment.

5. NON-COMPETE CLAUSE
Employee agrees not to engage in competing business activities for 12 months following termination within a 50-mile radius.

6. INTELLECTUAL PROPERTY
All work product created during employment shall be the exclusive property of the Employer.

7. TERMINATION
Either party may terminate this agreement with cause immediately or without cause with 30 days notice.`,
    summary:
      'Standard employment contract outlining position, compensation, confidentiality, and termination clauses for a senior software engineer role.',
    jurisdiction: 'California',
    year: 2024,
    tags: [
      'employment',
      'contract',
      'confidentiality',
      'non-compete',
      'intellectual property',
    ],
  },
  {
    id: '2',
    title: 'Software License Agreement (SLA)',
    category: 'Intellectual Property',
    content: `SOFTWARE LICENSE AGREEMENT

This Software License Agreement ("License") is between Tech Solutions Inc. ("Licensor") and ABC Company ("Licensee").

1. GRANT OF LICENSE
Licensor grants Licensee a non-exclusive, non-transferable license to use the Software for internal business purposes only.

2. LICENSE RESTRICTIONS
Licensee shall not: (a) modify, reverse engineer, or decompile the Software; (b) redistribute or sublicense the Software; (c) remove copyright notices.

3. LICENSE FEES
Licensee agrees to pay annual license fee of $50,000, due on January 1st of each year. Late payments subject to 1.5% monthly interest.

4. SUPPORT AND MAINTENANCE
Licensor shall provide technical support during business hours and quarterly software updates for the duration of this agreement.

5. WARRANTY DISCLAIMER
Software is provided "AS IS" without warranty of any kind. Licensor does not guarantee error-free operation or fitness for particular purpose.

6. LIMITATION OF LIABILITY
Licensor's liability shall not exceed the license fees paid in the 12 months preceding the claim. No liability for indirect or consequential damages.

7. TERM AND TERMINATION
This License is effective for 3 years from execution date. Either party may terminate for material breach with 60 days written notice.

8. DATA PRIVACY
Licensee shall comply with all applicable data protection laws including GDPR and CCPA when using the Software.`,
    summary:
      'Software licensing agreement defining usage rights, restrictions, fees, warranties, and liability limitations for commercial software.',
    jurisdiction: 'Delaware',
    year: 2023,
    tags: [
      'software',
      'license',
      'intellectual property',
      'SLA',
      'warranty',
      'liability',
    ],
  },
  {
    id: '3',
    title: 'Commercial Lease Agreement',
    category: 'Real Estate Law',
    content: `COMMERCIAL LEASE AGREEMENT

This Lease Agreement is made between Property Holdings LLC ("Landlord") and Retail Store Inc. ("Tenant").

1. PREMISES
Landlord leases to Tenant approximately 5,000 square feet of retail space located at 123 Main Street, Suite 100.

2. LEASE TERM
The term shall be 5 years commencing March 1, 2024, and ending February 28, 2029, with option to renew for additional 5-year term.

3. RENT
Base rent is $10,000 per month, payable on the first day of each month. Rent increases 3% annually. Security deposit of $30,000 required.

4. PERMITTED USE
Premises shall be used solely for retail clothing store operations and related activities. No hazardous materials permitted.

5. MAINTENANCE AND REPAIRS
Tenant responsible for interior maintenance. Landlord responsible for structural repairs, roof, and exterior maintenance.

6. IMPROVEMENTS
Tenant may make improvements with Landlord's written consent. All improvements become Landlord's property upon lease termination.

7. INSURANCE
Tenant shall maintain general liability insurance with minimum $2 million coverage naming Landlord as additional insured.

8. DEFAULT AND REMEDIES
Failure to pay rent for 10 days constitutes default. Landlord may terminate lease and pursue eviction and damages.

9. ASSIGNMENT AND SUBLETTING
Tenant may not assign or sublet without Landlord's prior written consent, which shall not be unreasonably withheld.`,
    summary:
      'Commercial lease agreement for retail space covering rent, term, maintenance responsibilities, insurance, and tenant obligations.',
    jurisdiction: 'New York',
    year: 2024,
    tags: [
      'real estate',
      'lease',
      'commercial',
      'property',
      'rent',
      'landlord-tenant',
    ],
  },
];
