const prisma = require('./src/prismaClient');
const bcrypt = require('bcrypt');

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const updatedUser = await prisma.user.update({
    where: { email: 'admin@stromex.com' },
    data: { password: hashedPassword }
  });
  console.log('Password reset successfully for:', updatedUser.email);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
