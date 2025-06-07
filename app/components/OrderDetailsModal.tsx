import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/app/components/ui/dialog';

interface Application {
  destination: string;
  visa_type: string;
  staying_from: string | Date;
  staying_to: string | Date;
  nationality: string;
  paper_type: string;
  email: string;
  phone: string;
  status: string;
  inserted_at: string | Date;
}

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: Application | null;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ isOpen, onClose, application }) => {
  if (!application) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Visa Application Details</DialogTitle>
          <DialogDescription>
            Review the details of your visa application submission.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <div>
            <span className="font-semibold">Destination:</span> {application.destination}
          </div>
          <div>
            <span className="font-semibold">Visa Type:</span> {application.visa_type}
          </div>
          <div>
            <span className="font-semibold">Staying From:</span>{' '}
            {new Date(application.staying_from).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold">Staying To:</span>{' '}
            {new Date(application.staying_to).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold">Nationality:</span> {application.nationality}
          </div>
          <div>
            <span className="font-semibold">Paper Type:</span> {application.paper_type}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {application.email}
          </div>
          <div>
            <span className="font-semibold">Phone:</span> {application.phone}
          </div>
          <div>
            <span className="font-semibold">Status:</span>{' '}
            <span className={`font-semibold ${application.status === 'Approved' ? 'text-green-600' : application.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
              {application.status}
            </span>
          </div>
          <div>
            <span className="font-semibold">Submitted At:</span>{' '}
            {new Date(application.inserted_at).toLocaleString()}
          </div>
          <div>
            <span className="font-semibold">Total Paid:</span> $70
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModal;
