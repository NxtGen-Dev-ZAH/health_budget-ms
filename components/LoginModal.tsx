'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const userRoles = ['SMO', 'WMO', 'MO', 'CLERICAL'] as const;
type UserRole = typeof userRoles[number];

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>('SMO');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    if (role === 'CLERICAL') {
      router.push('/dashboard/clerical');
    } else {
      router.push(`/dashboard/medical?role=${role.toLowerCase()}`);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-[#085928] text-white rounded-lg hover:bg-[#063] transition"
      >
        Login
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#085928]/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#063] hover:text-[#085928]"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-[#085928] mb-6">Welcome Back</h2>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#063] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-[#B8CFC9] focus:ring-2 focus:ring-[#085928] focus:border-transparent bg-white/50 text-[#063]"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#063] mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-[#B8CFC9] focus:ring-2 focus:ring-[#085928] focus:border-transparent bg-white/50 text-[#063]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[32px] text-[#063] hover:text-[#085928]"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#063] mb-1">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full px-4 py-2 rounded-lg border border-[#B8CFC9] focus:ring-2 focus:ring-[#085928] focus:border-transparent bg-white/50 text-[#063]"
                >
                  {userRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#085928] text-white rounded-lg hover:bg-[#063] transition mt-6"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 