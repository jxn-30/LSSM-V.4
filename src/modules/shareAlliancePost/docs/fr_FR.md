De nombreux utilisateurs aiment partager des missions avec leur alliance et également poster une note d'incident pour informer les membres de l'alliance.

Ce module vous permet d'alerter, de partager et de poster en un seul clic ! Vous pouvez définir des modèles pour les notes d'incident dans les paramètres, donc nous supportons certaines variables :

## Variables

### Crédits

<code><span>{{</span>Credits<span>}}</span></code> sont remplacés par les crédits moyens, les récompenses de la mission.

### Adresse

<code><span>{{</span>address<span>}}</span></code> est remplacé par l'adresse complète de la mission.

Vous pouvez utiliser <code><span>{{</span>city<span>}}</span></code> pour insérer uniquement le code postal et le nom de la ville.

### Restant

<code><span>{{</span>remaining<span>}}</span></code> est remplacé par les véhicules qui sont encore nécessaires pour cette mission. Il reflète exactement le texte dans la case rouge "Véhicules nécessaires".

### Patients

<code><span>{{</span>patients<span>}}</span></code> est remplacé par le nombre de patients actuellement présents à la mission.

### Temps

Vous pouvez également définir des distances temporelles. Le système est un peu compliqué, alors lisez attentivement :

<code><span>{{</span>now+5<span>}}</span></code> ajoute exactement 5 heures, <code><span>{{</span>now+5.5<span>}}</span></code> ajoute 5 heures et 30 minutes. Vous pouvez utiliser n'importe quel nombre à ajouter.

Vous pouvez également choisir d'arrondir à l'unité supérieure ou inférieure. Pour arrondir au quart d'heure supérieur, ajoutez simplement un `r15`, pour arrondir au quart d'heure inférieur, ajoutez simplement `r-15`. Vous pouvez utiliser n'importe quel nombre entre `0` et `59`..

Exemple : Si vous voulez faire "en 7 heures et 22,5 minutes, mais arrondir à une minute divisible par 3", il suffit d'utiliser <code><span>{{</span>now+7.266r-3<span>}}</span></code>.

Si vous ne comprenez pas le système ou si vous avez besoin d'aide, vous pouvez toujours joindre notre [Support](/support.md).