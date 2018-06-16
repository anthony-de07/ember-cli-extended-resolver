import Resolver from 'ember-resolver';
import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';
import { copy } from '@ember/object/internals';

export const ExtendedResolverMixin = Mixin.create({
  modelsPodsEnabled: false,
  modelsPodsDirectory: 'models',
  modelsPodsTypes: computed(() => ['adapter', 'model', 'serializer']),

  modelsPodsBasedLookup(parsedName) {
    const directory = `${this.namespace.modulePrefix}/${get(this, 'modelsPodsDirectory')}`;

    return this.podBasedLookupWithPrefix(directory, parsedName);
  },

  routesPodsEnabled: true,
  routesPodsDirectory: 'routes',
  routesPodsTypes: computed(() => ['controller', 'route', 'template']),

  routesPodsBasedLookup(parsedName) {
    const { type } = parsedName;

    if (get(this, 'routesPodsTypes').includes(type)) {
      const directory = `${this.namespace.modulePrefix}/${get(this, 'routesPodsDirectory')}`;

      return this.podBasedLookupWithPrefix(directory, parsedName);
    }
  },

  moduleNameLookupPatterns: computed(function() {
    const defaultModulePatters = copy(this._super(...arguments));

    if (get(this, 'modelsPodsEnabled')) {
      const modelsPodsBasedLookupPattern = get(this, 'modelsPodsBasedLookup');

      defaultModulePatters.unshift(modelsPodsBasedLookupPattern)
    }

    if (get(this, 'routesPodsEnabled')) {
      const routesPodsBasedLookupPattern = get(this, 'routesPodsBasedLookup');

      defaultModulePatters.unshift(routesPodsBasedLookupPattern)
    }

    return defaultModulePatters;
  }),
});


export default Resolver.extend(ExtendedResolverMixin);
