import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormContainer } from './styles';

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchFromProps {
  getPosts: (query: string) => Promise<void>;
  totalPosts: number;
}

export function SearchForm({ getPosts, totalPosts }: SearchFromProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={ handleSubmit(handleSearchPosts) }>
      <header>
        <h2>Publicações</h2>
        { totalPosts > 1 ? <span>{ totalPosts } publicações</span> : <span>{ totalPosts } publicação</span> }
      </header>
      <input type="text" placeholder="Buscar conteúdo" { ...register("query") } />
    </SearchFormContainer>
  )
}