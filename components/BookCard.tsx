import { Card, Title, Paragraph } from 'react-native-paper';
import { Link } from 'expo-router';
import { Book } from '../data/books';

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  return (
    <Link href={`/book-details?id=${book.id}`} asChild>
      <Card style={{ margin: 10 }}>
        <Card.Cover source={book.cover} />
        <Card.Content>
          <Title>{book.title}</Title>
          <Paragraph>{book.author}</Paragraph>
        </Card.Content>
      </Card>
    </Link>
  );
}