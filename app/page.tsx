import Image from 'next/image';
import Link from 'next/link';
import LoginModal from '@/components/LoginModal';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#B8CFC9] to-[#C7D6B1]">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="HMS Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-[#063]">HMS Portal</span>
          </div>
          <LoginModal />
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-[#085928] leading-tight">
              Welcome to Health Management System
            </h1>
            <p className="text-lg text-[#063]">
              A comprehensive solution for managing health services, optimizing resources,
              and providing better healthcare experiences.
            </p>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-6 py-3 bg-[#085928] text-white rounded-lg hover:bg-[#063] transition"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-[#085928] text-[#085928] rounded-lg hover:bg-[#B8CFC9] transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/admin.jpg"
              alt="Healthcare Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/90 rounded-xl shadow-lg hover:bg-[#B8CFC9] transition duration-300">
            <h3 className="text-xl font-semibold text-[#085928] mb-3">For Medical Officers</h3>
            <p className="text-[#063]">Streamlined patient management and efficient healthcare delivery.</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl shadow-lg hover:bg-[#B8CFC9] transition duration-300">
            <h3 className="text-xl font-semibold text-[#085928] mb-3">For Clerical Staff</h3>
            <p className="text-[#063]">Simplified data management and record keeping system.</p>
          </div>
          <div className="p-6 bg-white/90 rounded-xl shadow-lg hover:bg-[#B8CFC9] transition duration-300">
            <h3 className="text-xl font-semibold text-[#085928] mb-3">For Administrators</h3>
            <p className="text-[#063]">Comprehensive analytics and resource optimization tools.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
