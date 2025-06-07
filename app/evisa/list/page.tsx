'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import OrderDetailsModal from '../../components/OrderDetailsModal';

interface Application {
  id: string;
  destination: string;
  visa_type: string;
  staying_from: string;
  staying_to: string;
  email: string;
  phone: string;
  nationality: string;
  paper_type: string;
  status: string;
  inserted_at: string;
}

interface User {
  id: string;
  email?: string;
  [key: string]: any;
}

export default function ApplicationListPage() {
  const [, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const router = useRouter();

  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (app: any) => {
    setSelectedApp(app);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedApp(null);
  };

  useEffect(() => {
    const fetchUserAndApps = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return router.push('/login');

      setUser(userData.user);

      const { data, error } = await supabase
        .from('visa_applications')
        .select('*');

      if (error) console.error('Error fetching applications:', error);
      else setApplications(data || []);
    };

    fetchUserAndApps();
  }, [router]);

  return (
    <div className="max-w-4xl mx-auto pt-6">
      <h1 className="text-2xl font-semibold mb-4">Your Visa Applications</h1>

      {applications.length === 0 && (
        <p className="text-gray-500">No applications submitted yet.</p>
      )}

      <div className="space-y-4">
        {applications.map((app: any) => (
          <div key={app.id} className="border rounded-lg p-4 shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold">{app.destination}</h2>
                <p className="text-sm text-gray-600">Visa Type: {app.visa_type}</p>
                <p className="text-sm text-gray-600">
                  Stay: {new Date(app.staying_from).toLocaleDateString()} - {new Date(app.staying_to).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">Name/Email: {app.email}</p>
                <p className="text-sm text-gray-600">Phone: {app.phone}</p>
                <p className="text-sm text-gray-600">Nationality: {app.nationality}</p>
                <p className="text-sm text-gray-600">Paper Type: {app.paper_type}</p>
                <p className="text-sm text-gray-600 mt-1">Total: $70</p>
              </div>

              <div className="text-right space-y-2">
                <span className={`text-sm font-semibold ${app.status === 'Approved' ? 'text-green-600' : app.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {app.status}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => openModal(app)}
                    className="text-sm bg-blue-500 text-white px-3 py-2 rounded"
                  >
                    View Order Details
                  </button>
                  <button
                    onClick={() => alert('Feature coming soon')}
                    className="text-sm bg-gray-500 text-white px-3 py-2 rounded"
                  >
                    Contact
                  </button>
                  <OrderDetailsModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    application={selectedApp}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
