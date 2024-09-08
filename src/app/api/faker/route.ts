import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import prisma from '@/app/db';

export async function GET() {
  try {
    // Generate fake work experiences
    console.log('aagy')
    const workExperiencesToCreate = 5;
    const workExperiences = Array.from({ length: workExperiencesToCreate }, () => ({
      startDate: faker.date.past(),
      endDate: Math.random() > 0.2 ? faker.date.recent() : null,
      company: faker.company.name(),
      jobTitle: faker.person.jobTitle(),
      jobDescription: faker.lorem.paragraph(),
      status: 'PENDING',
      skills: faker.helpers.arrayElements(
        [
          'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker',
          'TypeScript', 'GraphQL', 'MongoDB', 'DevOps', 'Machine Learning'
        ],
        faker.number.int({ min: 1, max: 5 })
      ),
      transactionId: faker.string.uuid(),
    }));

    console.log(`Generated ${workExperiences.length} fake work experiences.`);

    // Update user with new work experiences
    const updatedUser = await prisma.user.update({
      where: { email: 'prajjwalbh25@gmail.com' },
      data: {
        workExperiences: {
          create: workExperiences
        }
      },
      include: {
        workExperiences: true
      }
    });

    console.log(`User updated successfully with ${updatedUser.workExperiences.length} work experiences.`);

    return NextResponse.json({
      message: 'Fake work experience data generated successfully',
      workExperiencesCreated: updatedUser.workExperiences.length
    }, { status: 200 });
  } catch (error) {
    console.error('Error generating fake data:');
    return NextResponse.json({ error: 'Failed to generate fake data' }, { status: 500 });
  }
}
