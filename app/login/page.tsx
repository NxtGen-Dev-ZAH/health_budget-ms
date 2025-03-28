import LoginModal from '@/components/LoginModal';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#B8CFC9] via-[#a5daad] to-[#085928]">
      <div className="w-full max-w-6xl px-4 flex flex-col items-center">
        {/* Logo and Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#063] mb-2">
            Health Management System
          </h1>
          <p className="text-lg text-[#085928]">
            Streamlining healthcare administration for better patient care
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full flex justify-center items-center gap-12 flex-col">
          {/* Left Side - Features */}
          <div className="space-y-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
            <h2 className="text-2xl font-semibold text-[#063] mb-4">
              Welcome to HMS Portal
            </h2>
            
            <div className="space-y-4">
              <FeatureItem
                title="Efficient Workflow"
                description="Streamlined processes for medical and clerical staff"
              />
              <FeatureItem
                title="Secure Access"
                description="Role-based authentication for different staff members"
              />
              <FeatureItem
                title="Data Management"
                description="Centralized system for patient records and reports"
              />
              <FeatureItem
                title="Real-time Updates"
                description="Instant access to critical information and notifications"
              />
            </div>
          </div>

          {/* Right Side - Login */}
          <div className="flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md">
              <LoginModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-5 h-5 mt-1">
        <div className="w-full h-full bg-[#085928] rounded-full" />
      </div>
      <div>
        <h3 className="font-medium text-[#063]">{title}</h3>
        <p className="text-sm text-[#085928]/80">{description}</p>
      </div>
    </div>
  );
} 