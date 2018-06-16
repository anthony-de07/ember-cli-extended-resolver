# ember-cli-extended-resolver

This addons allows to modify default files structure to be more feature-grouped.

## 1. Installation

```shell
ember install ember-cli-extended-resolver
```

## 2. Usage
```javascript
//app/resolver.js
import ExtendedResolver from 'ember-cli-extended-resolver';

export default ExtendedResolver.extend({
    //custom settings
});
```
or
```javascript
//app/resolver.js
import Resolver from 'ember-resolver';
import { ExtendedResolverMixin } from 'ember-cli-extendexd-resolver';

export Resolver.extend(ExtendedResolverMixin, {
    //custom settings
}); 
```
## 3. Settings

### Models
 * **modelsPodsEnabled**. If models pod should be enabled. By default `false`.
 * **modelsPodsDirectory**: Directory of Models pod. By default `'models'`.
 * **modelsPodsTypes**: File types that models pod contains. By default `['adapter', 'model', 'serializer']`.

### Routes
 * **routesPodsEnabled**: If routes pod should be enabled. `false` by default.
 * **routesPodsDirectory**: Directory of Routes pod. By default `'routes'`.
 * **routesPodsTypes**: File types that models pod contains. By default `['controller', 'route', 'template']`.


## Example

### Classic structure
```
├─ adapters/
│  ├─ conversation.js
│  ├─ message.js
│  └─ user.js
├─ controllers/
│  ├─ conversations/
│  │  ├─ conversation.js
│  │  └─ new.js
│  └─ users/
│     ├─ new.js
│     └─ user.js
├─ models/
│  ├─ conversation.js
│  ├─ message.js
│  └─ user.js
│  routes/
│  ├─ conversations/
│  │  └─ conversation.js
│  └─ users/
│     ├─ new.js
│     └─ user.js
├─ serializers/
│  ├─ conversation.js
│  └─ user.js
├─ services/
│  ├─ conversation-manager.js
│  ├─ message-manager.js
│  └─ user-manager.js
└─ templates/
   ├─ conversations/
   │  ├─ conversation.hbs
   │  ├─ index.hbs
   │  └─ new.hbs
   ├─ users/
   │  ├─ new.hbs
   │  ├─ index.hbs
   │  └─ user.hbs
   ├─ conversations.hbs
   └─ index.hbs

```
### Extended structure

```
├─ models/
│  ├─ conversation/
│  │  ├─ adapter.js
│  │  ├─ model.js
│  │  └─ serializer.js
│  ├─ message/
│  │  ├─ adapter.js
│  │  └─ model.js
│  └─ user/
│     ├─ adapter.js
│     ├─ model.js
│     └─ serializer.js
├─ routes/
│  ├─ conversations/
│  │  ├─ conversation/
│  │  │  ├─ controller.js
│  │  │  ├─ route.js
│  │  │  └─ template.hbs
│  │  ├─ index/
│  │  │  └─ template.hbs
│  │  ├─ new/
│  │  │  ├─ controller.js
│  │  │  └─ template.hbs
│  │  └─ template.hbs
│  ├─ index
│  │  └─ template.hbs
│  └─ users/
│     ├─ new/
│     │  ├─ controller.js
│     │  ├─ route.js
│     │  └─ template.hbs
│     ├─ user/
│     │  ├─ controller.js
│     │  ├─ route.js
│     │  └─ template.hbs
│     └─ template.hbs
└─ services/
   ├─ conversation-manager.js
   ├─ message-manager.js
   └─ user-manager.js

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
