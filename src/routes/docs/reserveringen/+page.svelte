<h2>Reserveringen</h2>

<h3 id="get">GET</h3>

<ul><li>
  <a href="/api/v1/reserveringen">/api/v1/reserveringen</a>
</li></ul>

<h3 id="post">POST</h3>

<p>Voeg een nieuwe Reservering toe, met een referentie naar een OBA ID (het ID van een item uit de collectie van de OBA API).</p>

<p>De volgende structuur is vereist:</p>

<pre><code>&lbrace;
	"obaId": "...",
	"userName": "...",
    "date":"..."
&rbrace;</code></pre>

<p>Met als voorbeeld voor een Reservering van een item uit de OBA collectie</p>

<pre><code>&lbrace;
	"obaId":"|oba-catalogus|969509", 
	"userName":"Pipo",
    "date":"2023-03-20"
&rbrace;</code></pre>

<p>Hou er rekening mee dat een Reservering uniek moet zijn. Als je een al bestaande Reservering toevoegt, krijgt je een fout terug (de Reservering wordt dan dus niet dubbel toegevoegd).</p>

<ul><li>
  <a href="/api/v1/urls">/api/v1/reserveringen</a>
</li></ul>