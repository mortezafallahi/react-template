import Icon from '../../components/Icon';

const HomePage = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <p>this is a test text</p>
      <Icon className={'size-10'} strokeWidth={1.5} name={'calendar'} />
    </div>
  );
};

export default HomePage;
