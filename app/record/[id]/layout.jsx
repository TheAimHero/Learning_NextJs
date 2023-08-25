import LayoutStructure from '@/components/LayoutStructure';
import { RECORDS, RECORDS_MAP } from './data';

export async function generateStaticParams() {
  return RECORDS.map(record => ({
    id: record.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const record = RECORDS_MAP[id];
  return {
    title: `${record.title} - David Kando`,
    description: record.blurb,
  };
}

export default function Layout(props) {
  const { children, params } = props;
  const { id } = params;
  const record = RECORDS_MAP[id];
  const { title, background } = record;
  return (
    <LayoutStructure title={title} background={background}>
      <div className='flex flex-col items-center'>{children}</div>
    </LayoutStructure>
  );
}
