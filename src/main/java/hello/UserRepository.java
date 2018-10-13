package hello;

import org.springframework.data.repository.CrudRepository;

import hello.Todo;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<Todo, Long> {

}
