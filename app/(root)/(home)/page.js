import CardFeed from '@/components/cards/CardFeed';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse justify-between w-full gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Projects</h1>
        <div className="flex justify-end max-sm:w-full">
          <Link href={'/create-project'}>
            <Button className="bg-[#7e22ce] min-h-[46px] px-4 py-3 text-lg font-bold !text-light-900">
              Create a Project
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full px-1 mt-14">
        <CardFeed />
      </div>
    </>
  );
}
