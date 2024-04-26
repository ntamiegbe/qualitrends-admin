import Invoice from '@/components/lease&sale/Invoice';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lease and Sales | Invoice",
};

const page = () => {
  return <Invoice />;
};

export default page;
