import { Appbar } from 'react-native-paper';
import { Link } from 'expo-router';

type Props = {
  title: string;
};

export default function AppHeader({ title }: Props) {
  return (
    <Appbar.Header>
      <Link href="/" asChild>
        <Appbar.BackAction />
      </Link>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}